# Navigate to the root directory
cd ../

# Remove all unused data
docker system prune -af # remove all unused data
docker volume prune -f # remove all unused volumes
docker network prune -f # remove all unused networks
docker image prune -af # remove all unused images
docker container prune -f # remove all stopped containers
docker builder prune -f # remove all unused builders

# Update the repository and redeploy
git pull origin ci_cd
docker compose down
docker compose up -d --build 