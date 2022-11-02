


export function buildUrl(){
    let url = "";
    const departureDate = new Date(+this.getValue("departureDate"));
    const returnDate = this.getValue("returnDate") ?
                       new Date(+this.getValue("returnDate")).toISOString().slice(0,10) : '';
    debugger
    url = url + "language=" + this.getValue("language") + "&"
              + "from=" + this.getValue("from") + "&"
              + "to=" + this.getValue("to") + "&"
              + "departureDate=" + departureDate.toISOString().slice(0,10) + "&"
              + "returnDate=" + returnDate+ "&"
              + "nbAdults=" + this.getValue("nbAdults") + "&"
              + "nbChildren=" + this.getValue("nbChildren") + "&"
              + "nbInfants=" + this.getValue("nbInfants") + "&"
              + "pointOfSale=" + this.getValue("pointOfSale") + "&"
              + "trace=" + this.getValue("trace") + "&"
              + "tripType=" + this.getValue("tripType") + "&"
              + "useHPP=" + this.getValue("useHPP")
    return url;
}
