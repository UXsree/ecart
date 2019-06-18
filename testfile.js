static getSalesLink(){
        return this.getLocators(CUSTOMFIELDS_DRAWER.left.sales)
    }
    static getGoToCustomerLink(){
        return this.getLocators(CUSTOMFIELDS_DRAWER.left.customer)
    }
    static goToCustomerDetailsPage(){
        return this.getLocators(CUSTOMFIELDS_DRAWER.left.customerDetails)
    }
//something to test
    static customerDetailsTabSelector(){
        return this.getLocators(CUSTOMFIELDS_DRAWER.left.customerDetailsTab)
    }
