# Dockerfile for Moodle on Railway
FROM php:8.1-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libzip-dev \
    libicu-dev \
    libxml2-dev \
    libcurl4-openssl-dev \
    libonig-dev \
    unzip \
    git \
    && rm -rf /var/lib/apt/lists/*

# Install PHP extensions required for Moodle
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) \
        gd \
        mysqli \
        pdo_mysql \
        zip \
        intl \
        xml \
        curl \
        mbstring \
        soap \
        opcache

# Enable Apache modules
RUN a2enmod rewrite ssl headers

# Set recommended PHP settings for Moodle
RUN { \
    echo 'memory_limit = 512M'; \
    echo 'upload_max_filesize = 100M'; \
    echo 'post_max_size = 100M'; \
    echo 'max_execution_time = 300'; \
    echo 'max_input_vars = 5000'; \
    echo 'session.save_handler = files'; \
    echo 'session.save_path = "/tmp"'; \
    echo 'opcache.enable = 1'; \
    echo 'opcache.memory_consumption = 128'; \
    echo 'opcache.max_accelerated_files = 4000'; \
    echo 'opcache.revalidate_freq = 60'; \
} > /usr/local/etc/php/conf.d/moodle.ini

# Download and install Moodle 4.3 (LTS)
WORKDIR /var/www/html
RUN curl -L https://download.moodle.org/download.php/direct/stable403/moodle-4.3.4.tgz | tar xzf - --strip-components=1

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Create moodledata directory
RUN mkdir -p /var/moodledata \
    && chown -R www-data:www-data /var/moodledata \
    && chmod -R 777 /var/moodledata

# Copy custom Apache configuration
COPY apache-config.conf /etc/apache2/sites-available/000-default.conf

# Copy Moodle configuration script
COPY config.php /var/www/html/config.php
RUN chown www-data:www-data /var/www/html/config.php

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

# Start Apache
CMD ["apache2-foreground"]
