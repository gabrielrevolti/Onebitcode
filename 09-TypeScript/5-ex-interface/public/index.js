//url: https://api.github.com/users/<nome_do_usuario>
//usaremos o: id: number, login: string, name: string, bio: string, public_repos: number, repos_url: string.
//o usuario devera ser salvo em uma lista
const users = [];
async function fetchUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    if (user.message) {
        alert('Usuário não encontrado!');
    }
    else {
        users.push(user);
        alert(`O usuário ${user.login} foi salvo.\n` +
            `\nid: ${user.id}` +
            `\nlogin: ${user.login}` +
            `\nNome: ${user.name}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}`);
    }
}
async function showUserDetails(username) {
    const user = users.find(user => user.login === username);
    if (typeof user === 'undefined') {
        alert(`${username} não encontrado`);
    }
    else {
        const response = await fetch(user.repos_url);
        const repos = await response.json();
        let message = `id: ${user.id}\n` +
            `\nlogin: ${user.login}` +
            `\nNome: ${user.name}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}`;
        repos.forEach(repo => {
            message += `\nNome: ${repo.name}` +
                `\nDescrição: ${repo.description}` +
                `\nEstrelas: ${repo.stargazers_count}` +
                `\nÉ um fork: ${repo.fork ? 'Sim' : 'Não'}\n`;
        });
        alert(message);
    }
}
function showUsers() {
    let message = `Usuários Salvos:\n`;
    let count = 1;
    users.forEach((i) => {
        message +=
            `\n${count}° Nome: ${i.name}
     Login: ${i.login}\n`;
        count++;
    });
    alert(message);
}
function showReposTotal() {
    const allRepos = users.reduce((sum, user) => (sum + user.public_repos), 0);
    alert(`O grupo possui um total de ${allRepos} repositórios públicos!`);
}
function showTopFive() {
    const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 5);
    let message = 'Top 5 usuários com mais repositórios públicos: \n';
    topFive.forEach((user, index) => {
        message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios`;
    });
    alert(message);
}
async function main() {
    await fetchUser('gabrielrevolti');
    await fetchUser('KauanRodriguez');
    await fetchUser('rafaballerini');
    await fetchUser('bedimcode');
    await fetchUser('isaacpontes');
    await fetchUser('julianaconde');
    await fetchUser('LeDragoX');
    await showUserDetails('gabrielrevolti');
    await showUserDetails('KauanRodriguez');
    showUsers();
    showReposTotal();
    showTopFive();
}
main();
