function getBotResponse(input) {
    

    if (input == "hello" ) {
        return "Hello there!";
    } 
    else if (input == "goodbye") {
        return "Talk to you later!";
    } 
    else if (input == "company") {
        return "Future Generali India Insurance Co. Ltd ,HDFC ERGO General Insurance Co. Ltd., IFFCO Tokio General Insurance Co. Ltd., Universal Sompo General Insurance Company, ICICI Lombard General Insurance Co. Ltd.";    
    } 
    else if (input == "risks" ) {
        return "Talk to you  Natural Calamities like Cyclone, hailstorm, hurricane, storm, tempest, tornado, typhoon, etc. Pests or dieseses,Drought, dry spells";
    }
    else if (input == "insurance") {
        return "Food crops (Cereals, Millets and Pulses),  Oilseeds,  Annual Commercial / Annual Horticultural crops";
    }
    
    else {
        return "Try asking something else!";
    }

}