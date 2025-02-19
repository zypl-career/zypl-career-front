# Remove all unused data
sudo docker system prune -af # remove all unused data
sudo docker volume prune -f # remove all unused volumes
sudo docker network prune -f # remove all unused networks
sudo docker image prune -af # remove all unused images
sudo docker container prune -f # remove all stopped containers
sudo docker builder prune -f # remove all unused builders

# Update the repository and redeploy
git pull origin ci_cd
sudo docker compose down
sudo docker compose up -d --build 