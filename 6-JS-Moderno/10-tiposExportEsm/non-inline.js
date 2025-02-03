function group (){
    console.log('export nomeado não-inline(agrupado)')
}
function ExportDefault (){
    console.log('export default não-inline')
}

export {group}

export default ExportDefault