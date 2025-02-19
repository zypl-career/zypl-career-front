# Navigate to the correct directory (ensure it exists)
cd /home/${USER}/zypl-career-front || exit 1

# Check if it's a Git repository
if [ ! -d ".git" ]; then
  echo "Error: Not a git repository."
  exit 1
fi

# Clean up Docker resources
docker system prune -af
docker volume prune -f
docker network prune -f
docker image prune -af
docker container prune -f
docker builder prune -f

# Pull latest changes
git pull origin ci_cd

# Ensure the docker-compose file exists
if [ ! -f "docker-compose.yml" ]; then
  echo "Error: docker-compose.yml not found."
  exit 1
fi

# Restart containers
docker compose down
docker compose up -d --build
