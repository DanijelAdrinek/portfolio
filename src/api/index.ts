const linkToGmail = process.env.NEXT_PUBLIC_CONTACT_ME_NUMBER;
const formSubmitUrl = `https://formsubmit.co/ajax/${linkToGmail}`;

export function sendEmail(name: string, email: string, message: string) {

    return fetch(formSubmitUrl, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${ name && name } - ${email}`,
            message: message
        })
    })
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);

}