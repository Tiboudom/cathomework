const pics = [
    'kitten.jpeg',
    'kitten2.jpeg',
    'kitten3.jpeg',
];
let idx = 0;

function chKitten() {
    idx += 1;
    if (idx >= pics.length)
        idx = 0;
    document.getElementById("cat-img").src=pics[idx];
}