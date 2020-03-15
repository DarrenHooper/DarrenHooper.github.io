const milkAndMocha = [
    'https://media.giphy.com/media/Ie4CIIvQS0bk3zwZlM/giphy.gif',
    'https://media1.tenor.com/images/ef9687b36e36605b375b4e9b0cde51db/tenor.gif?itemid=12498627',
    'https://media1.tenor.com/images/fca608525699df213af65a7748062b04/tenor.gif?itemid=11455738',
    'https://media1.tenor.com/images/d2f790978f11b5bb2f1ff38124a9a47a/tenor.gif?itemid=11453880',
    'https://media1.tenor.com/images/3264bcc47ee47ebbdd441f9f1d203542/tenor.gif?itemid=12498539',
    'https://media1.tenor.com/images/641a584c05345c733e8e5d94f906e53c/tenor.gif?itemid=12535135',
    'https://media1.tenor.com/images/66f920fdd54c519f98af3a8a24fd14a7/tenor.gif?itemid=13418531',
    'https://media1.tenor.com/images/bb6553860420324d73f43ded9cdd82a3/tenor.gif?itemid=12535183',
    'https://media1.tenor.com/images/b1189e353db0bed3521885bec284264b/tenor.gif?itemid=11453877',
    'https://media1.tenor.com/images/2d4138c7c24d21b9d17f66a54ee7ea03/tenor.gif?itemid=12535134',
    'https://media1.tenor.com/images/5c712c9fc3f17b1735a36b8ec65996ba/tenor.gif?itemid=12535181',
    'https://media1.tenor.com/images/6145bba0655e427da9c46005e8ae9164/tenor.gif?itemid=13093760',
    'https://media1.tenor.com/images/ef52d4c16ad755d0da9c00d2c9318eaf/tenor.gif?itemid=13646536',
    'https://media1.tenor.com/images/f51131bf1c5e617b12856bdd47a03eae/tenor.gif?itemid=11455736',
    'https://media1.tenor.com/images/fa494e85b6099eda29f75fa0ae547e7a/tenor.gif?itemid=11455412'
];

const delayText = [
    'Connecting...',
    'This seems to be taking a while, please be patient',
    'Clearing out ponies',
    'Man this is slow',
    'How does someone have *this* many random facts',
    'Getting the song unstuck from his head'
];

checkName = () => {
    const name = document.getElementById('nameEntry').value.toLowerCase();
    const giphyContainer = document.getElementById('giphyContainer');
    let newSrc = 'https://media.giphy.com/media/BBzeJCZ5FJ7pe/giphy.gif';
    if (name === 'sam' || name === 'samantha' || name === 'sammermangoes') {
        newSrc = milkAndMocha[getRandomInt(0, milkAndMocha.length - 1)];
    } else if (name === 'tawny') {
        newSrc = 'https://media.giphy.com/media/cNNCy3mTROEoiIowbI/giphy.gif'
    } else if (name === 'rachel') {
        newSrc = 'https://media.giphy.com/media/gW7XhsJuzIgH6/giphy.gif';
    } else if (name === 'murray' || name === 'dad') {
        newSrc = 'https://media.giphy.com/media/ksvsRO6TncRPy/giphy.gif'
    } else if (name === 'karen' || name === 'mom') {
        newSrc = 'https://media.giphy.com/media/exNKAVKn5X0yI/giphy.gif'
    } else if (name === 'emmanuel' || name === 'richard' || name === 'rob' || name === 'ivan' || name === 'asad'
        || name === 'omar') {
        newSrc = 'https://media1.tenor.com/images/79d0ee6d963b4af95e6ad70bc3924272/tenor.gif?itemid=11264744'
    } else if (name === 'eros') {
        newSrc = 'https://media1.tenor.com/images/12303bb80f998c5b5720386c26ceff20/tenor.gif?itemid=14656677'
    } else if (name === 'jason') {
        newSrc= 'https://media1.tenor.com/images/6e472cddd0782dc81632291880673b98/tenor.gif?itemid=5256651'
    } else if (name === 'andrew') {
        newSrc = 'https://media1.tenor.com/images/3a30a744bd9835eeffccf4be609fdf00/tenor.gif?itemid=5071803'
    } else if (name === 'darren') {
        newSrc ='https://media1.tenor.com/images/1c75f6a1e7031a6db9b99cd2de04c6ce/tenor.gif?itemid=5539154'
    } else if (name === 'ryan') {
        newSrc = 'https://media1.tenor.com/images/734bbe4cbc1599c3f6297078e13310a1/tenor.gif?itemid=15421998'
    } else if (name === 'francis' || name === 'francesca') {
        newSrc = 'https://media1.tenor.com/images/438373b9a9f0bb628cd194c35f467044/tenor.gif?itemid=5129636'
    } else if (name === 'david') {
        newSrc ='https://media1.tenor.com/images/677f6bc7f2413bcf9b1a4cf2547e642f/tenor.gif?itemid=4594397'
    }
    giphyContainer.setAttribute('src', newSrc);
    giphyContainer.style.display = 'block';

    return true;
};

randomDelay = () => {
    const giphyContainer = document.getElementById('giphyContainer');

    giphyContainer.style.display = 'none';
    if (Math.random() < 0.1) {
        let delayCount = 0;
        const delayField = document.getElementById('delayText');
        delayField.textContent = delayText[getRandomInt(0, delayText.length -1)];
        delayField.style.display = 'block';

        const intervalId = window.setInterval(() => {
            if (delayCount >= 2) {
                delayField.style.display = 'none';
                checkName();
                clearInterval(intervalId);
            }
            delayField.textContent = delayText[getRandomInt(0, delayText.length -1)];
            delayCount += 1;
        }, 3000)
    } else {
        checkName();
    }
};

getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};
