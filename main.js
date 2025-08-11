document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/odaniloborges')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            if (nameElement) nameElement.innerText = json.name;
            if (usernameElement) usernameElement.innerText = json.login;
            if (avatarElement) avatarElement.src = json.avatar_url;
            if (reposElement) reposElement.innerText = json.public_repos;
            if (followersElement) followersElement.innerText = json.followers;
            if (followingElement) followingElement.innerText = json.following;
            if (linkElement) linkElement.href = json.html_url;
        })
        
        .catch(function(error) {
            console.log('Ocorreu um erro:', error);
        });
});