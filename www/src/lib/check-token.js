export class CheckToken {

    // return: Promise<boolean>
    static async isValid() {
        let headers = metalpic.createHeaders();
        let response = await fetch(`/api/checktoken`, {
            method: "POST",
            headers: headers
        });
        if (response.status == 200) {
            let obj = await response.json();
            return obj.valid;
        } else {
            return false;
        }
    }
}