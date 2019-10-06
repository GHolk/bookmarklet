// for auto submit https://pt-attendance.nctu.edu.tw/

class FormStateMemory {
    async loadAndRun() {
        let form = document.getElementById(this.formId)
        this.loadForm(form)
        const currentMonth = new Date(this.start).getMonth()
        this.submit()
        await this.sleep(5)

        while (true) {
            const start = new Date(this.start)
            this.moveDate(start, +7)
            const end = new Date(this.end)
            this.moveDate(end, +7)

            console.log(start.getMonth(), currentMonth)
            if (start.getMonth() != currentMonth) break
            else {
                this.start = this.dateToFormFormat(start)
                this.end = this.dateToFormFormat(end)

                form = document.getElementById(this.formId)
                this.setForm(form)
                this.submit()
                await this.sleep(5)
            }
        }
    }
    submit() {
        document.querySelector('#btnSubmit').click()
    }
    sleep(second) {
        return new Promise(wake => setTimeout(wake, second * 1000))
    }
    dateToFormFormat(date) {
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const dayOfMonth = date.getDate()
        const hour = date.getHours()
        const minute = date.getMinutes()
        const second = date.getSeconds()
        return `${year}-${month}-${dayOfMonth} ${hour}:${minute}:${second}`
        // return date.toISOString().replace('T', ' ').replace(/\..*$/, '')
    }
    moveDate(date, day) {
        date.setDate(date.getDate() + day)
    }
    loadForm(form) {
        this.project = form.elements.workP.value
        this.start = form.elements.workS.value
        this.end = form.elements.workE.value
        this.description = form.elements.workD.value
    }
    setForm(form) {
        form.elements.workP.value = this.project
        form.elements.workS.value = this.start
        form.elements.workE.value = this.end
        form.elements.workD.value = this.description
    }
}

const fm = new FormStateMemory()
fm.formId = 'form1'
fm.loadAndRun()

