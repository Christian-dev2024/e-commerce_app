
export const GenerateStatutProd = (qte: number) => {
    if(qte === 0 ){
        return 'faible'
    } else if (qte <= qte/2) {
        return 'en rupture'
    } else {
        return 'disponible'
    }
}
