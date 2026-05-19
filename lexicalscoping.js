function outer(){
    let username="kundan"
    function inner(){
        console.log("inner",username)
        let secret="woo"

    }
    function innertwo(){
        console.log("innertwo",username)
      //  console.log("secret",secret)
    }
    inner()
    innertwo()
}
outer()
console.log("outer",secret)
