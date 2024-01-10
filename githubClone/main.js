const searchGithub = async () => {
    const username = document.getElementById("searchInput").value;

    const response = await fetch(`https://api.github.com/users/${username}`);

    const detailsContainer = document.querySelector(".details");

    const data = await response.json();

    if (response.ok) {
        detailsContainer.style.display = "flex"
        document.getElementById("result").innerHTML = `
            <div class="profile">
                <div class="profile-image">
                    <img src="${data.avatar_url}"/>
                </div>
                <div class="profile-details">
                    <h2 class="name">${data.name || data.login}</h2>
                    <p class="username">@${data.login}</p>
                    <p class="bio">${data.bio || "Hesap Bilgisi Yok"}</p>

                    <div class="stats">
                        <div>
                            <div className="stats-name">Repo Sayısı</div>
                            <div className="stats-value">${data.public_repos}</div>
                        </div>  
                        <div>
                            <div className="stats-name">Takipçi</div>
                            <div className="stats-value">${data.followers}</div>
                        </div>
                        <div> 
                            <div className="stats-name">Takip Edilen</div>
                            <div className="stats-value">${data.following}</div>
                        </div>  
                    </div>
                </div>
            </div>
        `
    } else {
        alert(data.message);
    }
}