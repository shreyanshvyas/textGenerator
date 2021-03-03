const textarea = document.querySelector('[name = "text"]');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelector('[name = "filter"]'));
/* eslint-disable*/
const funkyLetters = {
    '-':'–','!':'ļ','?':'ɂ','(':'⁽',')':'⁾','+':'ᕀ','=':'⁼','0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵',
    '6':'⁶','7':'⁷','8':'⁸','9':'⁹','a':'𝓪','A':'ᴬ','b':'Ꙏ','B':'ᴮ','c':'𝓬','C':'ⲥ','d':'𝓭','D':'ᴰ','e':'𝓮','E':'ᴱ',
    'f':'𝑓','F':'ꜰ','g':'𝓰','G':'ᴳ','h':'ん','H':'ᵸ','i':'𝓲','I':'ꜞ','j':'𝒿','J':'ᴶ','k':'Ⲕ','K':'ᴷ','l':'ℓ','L':'ᒻ','m':'𝓂',
    'M':'ᴹ','n':'𝑛','N':'ᶰ','o':'ዐ','O':'ᴼ','p':'𝑝','P':'ᴾ','q':'𝑞','Q':'ǫ','r':'𝓻','R':'ᴿ','s':'𝓢','S':'ઽ','t':'𝑡','T':'ᵀ',
    'u':'𝓊','U':'ᵁ','v':'𝑣','V':'v','w':'𝜔','W':'ᵂ','x':'𝑥','X':'ᕁ','y':'𝓨','Y':'ʏ','z':'𝑧','Z':'ᙆ'};
    /*eslint-disable*/
const filters = {
    sarcastic(letter, index) {
        // if it is odd, it will return 1  that is truthy, so thi if statement will trip.
    if (index % 2) {
        return letter.toUpperCase();
    } 
    // if it is odd, it will return 1 and we will UpperCase it.
    return letter.toLowerCase();
    },
    funky(letter) {
    // first check if there is a funky letter for this case.
    let funkyLetter = funkyLetters[letter];
    if (funkyLetter) return funkyLetter;
    //if there is not, check if there is a lowercase version.
    funkyLetter = funkyLetters[letter.toLowerCase()]; 
    if (funkyLetter) return funkyLetter;
    //if There is nothing then return the regular letter
    return letter;

    }, 
    unable(letter) {
        const random = Math.floor(Math.random() * 3);
        if (letter === ' ' && random === 2) {
            return '...';
        } 
        return letter;
    
    },
    
    };

function transformText(text) {
      const filter = document.querySelector('[name = "filter"]:checked').value;
    // const filter = filterInputs.find(input => input.checked).value;
   // take the text, and loop over each letter.
   const mod = Array.from(text).map(filters[filter]);
    result.textContent = mod.join('');
}

textarea.addEventListener('input', e => transformText(e.target.value));
filterInputs.forEach(input => input.addEventListener('input', () => {
    transformText(textarea.value);
})
);
