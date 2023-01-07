
function verificaItem() {
    
   const type = document.querySelector('#tipo')

   const rarity = document.querySelector('#raridade')

   const quantidade = document.querySelector('#quantidade')

   const objItem = {

    value: 0,
    valueCopper: 0,
    rarity: 0,
    quant: 0

   }

   if (type.value == '1' || type.value == '4') {

    objItem.value = 100000
    objItem.valueCopper = 800000

   }else if(type.value =='2'){

    objItem.value = 800000
    objItem.valueCopper = 800000

   }else{

    objItem.value = 50000
    objItem.valueCopper = 400000

   }

   objItem.rarity = rarity.value
   objItem.quant = +quantidade.value

   return objItem

}

function calcularItem () {

    const material1 = document.getElementById('aço')
    const material2 = document.getElementById('quintessencia')
    const material3 = document.getElementById('buginganga')

    let result = document.querySelector('p')

    let btnSubmit = document.querySelector('.submit')

    btnSubmit.addEventListener('click', (e) => {

        e.preventDefault()
        

        const itemData = verificaItem()
        let parametroDS = 0
        let parametroPO = 0
        let parametroCP = 0
        let dsTotal = 0
        let poTotal = 0
        let cpTotal = 0


        if (itemData.rarity == 1) {
            
            parametroDS = 5000
            parametroPO = 25
            parametroCP = 20000

        }else{

            parametroDS = 25000
            parametroPO = 125
            parametroCP = 100000

        }

        dsTotal = (itemData.quant*(300 + 100 + 100)*parametroDS)
        poTotal = (itemData.quant*(300 + 100 + 100)*parametroPO)
        cpTotal = (itemData.quant*(300 + 100 + 100)*parametroCP)

        let açoDS = material1.value*parametroDS
        let açoPO = material1.value*parametroPO
        let açoCP = material1.value*parametroCP

        let mat2DS = material2.value*parametroDS
        let mat2PO = material2.value*parametroPO
        let mat2CP = material2.value*parametroCP

        let mat3DS = material3.value*parametroDS
        let mat3PO = material3.value*parametroPO
        let mat3CP = material3.value*parametroCP

        console.log(açoDS);
        console.log(mat2DS);
        console.log(mat3DS);

        dsTotal = dsTotal + (itemData.value * itemData.quant) - açoDS - mat2DS - mat3DS
        poTotal = poTotal - açoPO - mat2PO - mat3PO
        cpTotal = cpTotal + (itemData.valueCopper * itemData.quant) - açoCP - mat2PO - mat3CP

        console.log(itemData.value);

        result.innerHTML = `Você precisa de ${poTotal} pó brilhante, ${cpTotal} de cobre e ${dsTotal} de Dark Stell.`

    })

}

calcularItem()