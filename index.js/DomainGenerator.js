function DomainGenerator () {
    var pronoun =[ 'The' , 'hour'];
    var adj = ['great', 'big'];
    var noun = ['jogger' , 'racoon'];
    var possibleDomains = [];

        for (i = 0; i < pronoun.length; i++) {
            for (j = 0; j < adj.length; i++){
                for (k = 0; k < noun.length; i++){
                    possibleDomains.push(pronoun[i]+adj[i]+noun[i]+".com");
                }
            }
        }
        return(possibleDomains);
}
console.log(DomainGenerator());