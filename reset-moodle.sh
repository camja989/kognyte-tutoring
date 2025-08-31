#!/bin/bash

echo "🚀 Resetting Moodle with guaranteed admin access..."

# Stop and remove old containers
echo "Stopping old containers..."
docker stop moodle-mysql-2gb moodle-app-2gb 2>/dev/null || true
docker rm moodle-mysql-2gb moodle-app-2gb 2>/dev/null || true

# Clean up old volumes (optional - uncomment if you want fresh start)
# docker volume rm kognyte-tutoring_mariadb_data kognyte-tutoring_moodle_data 2>/dev/null || true

# Start fresh containers
echo "Starting fresh Moodle containers..."
docker-compose -f docker-compose-fresh.yml up -d

echo "⏳ Waiting for Moodle to initialize (this takes 2-3 minutes)..."
sleep 180

echo "✅ Moodle should be ready!"
echo ""
echo "🎯 NEW ADMIN CREDENTIALS:"
echo "URL: http://209.38.23.129/login/index.php"
echo "Username: admin"
echo "Password: Kognyte2025!"
echo "Email: admin@kognyte.co.nz"
echo ""
echo "🏆 Your premium HSFY platform is ready for demo!"
