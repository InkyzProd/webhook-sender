let isCooldown = false;

function send() {
    if (isCooldown) return;

    const webhookURL = document.getElementById("wu").value;
    const webhookName = document.getElementById("wun").value;
    const webhookAvatar = document.getElementById("wa").value;
    const content = document.getElementById("content").value;

    const body = {
        content: content,
        username: webhookName,
        avatar_url: webhookAvatar
    };

    isCooldown = true;

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        //return response.json();
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    })
    .finally(() => {
        setTimeout(() => {
            isCooldown = false;
        }, 5000);
    });
}
