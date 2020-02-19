import store from "@/store";

import MachinesDataMock from "@/mock/machinesData";

export default {
    store,
    data() {
        return {
            geladen: false
        }
    },
    computed: {
        vonDate: {
            get() {
                return this.$store.getters.von;
            },
            set(val) {
                this.$store.commit("setVon", val);
            }
        },
        bisDate: {
            get() {
                return this.$store.getters.bis;
            },
            set(val) {
                this.$store.commit("setBis", val);
            }
        },
        von: {
            get() {
                return this.vonDate.toISOString().slice(0, 10);
            },
            set(val) {
                if (val.length === 10) this.vonDate = val.toIsoDate();
            }
        },
        bis: {
            get() {
                return this.bisDate.toISOString().slice(0, 10);
            },
            set(val) {
                if (val.length === 10) this.bisDate = val.toIsoDate();
            }
        },
        filteredMachines: {
            get() {
                return this.$store.getters.filteredMachines;
            },
            set(val) {
                this.$store.commit('setFilteredMachines', val);
            }
        },
        machines() {
            return this.$store.getters.machines;
        },
        machinesData() {
            return this.$store.getters.machinesData;
        },
        dates() {
            var dateArray = new Array();
            var currentDate = this.vonDate;
            while (currentDate <= this.bisDate) {
                dateArray.push(new Date(currentDate));
                currentDate = currentDate.addDays(1);
            }
            return dateArray;
        }
    },
    watch: {
        vonDate() {
            this.loadMaschinesData(true);
        },
        bisDate() {
            this.loadMaschinesData(true);
        }
    },
    mounted() {
        this.loadMaschinesData();
    },
    methods: {
        loadMachineData(machine) {
            let data = MachinesDataMock.createMachinesData(
                this.vonDate,
                this.bisDate,
                machine
            );

            this.$store.commit("setMachinesData", [machine, data]);
        },
        loadMaschinesData(override) {
            if (!this.machinesData || override)
                this.machines.forEach(this.loadMachineData);
            this.geladen = true;
        },
        refresh() {
            this.loadMachineData(true);
        }
    }
};