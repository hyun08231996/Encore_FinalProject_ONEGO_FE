<template>

<div id="app">
    <div style="max-width: 800px; margin: 10px;">
        <div class="md-layout">
            <div class="md-layout-item md-size-70">
                <h1>Todo List</h1>
            </div>
            <div class="md-layout-item md-size-30">
                <md-field>
                    <label for="search">Search for</label>
                    <md-input v-model="search" />
                </md-field>
            </div>

            <div class="md-layout">
                <div class="md-layout-item md-size-100">

                    <div class="md-layout listTitle">
                        <div class="md-layout-item md-size-30 text-info">SUBJECT</div>
                        <div class="md-layout-item md-size-50 text-info">DESCRIPTION</div>
                    </div>

                    <div class="md-layout listInner" v-for="(listItem, index) in sortedData" :key="index">
                        <div class="md-layout-item md-size-30 text-info"> {{ listItem.subject }} </div>
                        <div class="md-layout-item md-size-50 text-info"> {{ listItem.desc }} </div>

                        <div class="md-layout-item md-size-10 text-info">
                            <i class="fas fa-edit" @click="onEdit(index)"></i>
                        </div>
                        <div class="md-layout-item md-size-10 text-info">
                            <i class="fas fa-trash-alt" @click="onRemove(index)"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <i class="fas fa-plus-circle addBtn" @click="onAdd"></i>
            </div>
        </div>

        <div>
            <md-dialog :md-active.sync="addDialog" @keydown.esc="closeDialog">
                <md-dialog-title>Add</md-dialog-title>

                <md-dialog-content>
                    <md-field>
                        <label for="subject">subject</label>
                        <md-input v-model="newData.subject" />
                    </md-field>

                    <md-field>
                        <label for="description">description</label>
                        <md-input v-model="newData.desc" @keydown.enter="submit" required />
                    </md-field>
                </md-dialog-content>

                <md-dialog-actions>
                    <md-button class="md-primary" @click="closeDialog">Close</md-button>
                    <md-button class="md-primary" @click="submit">Save</md-button>
                </md-dialog-actions>
            </md-dialog>

            <md-dialog :md-active.sync="editDialog" @keydown.esc="closeDialog">
                <md-dialog-title>Edit</md-dialog-title>

                <md-dialog-content>
                    <md-field>
                        <label for="subject">subject</label>
                        <md-input v-model="selectedData.subject" />
                    </md-field>

                    <md-field>
                        <label for="description">description</label>
                        <md-input v-model="selectedData.desc" @keydown.enter="editedSubmit" required />
                    </md-field>
                </md-dialog-content>

                <md-dialog-actions>
                    <md-button class="md-primary" @click="closeDialog">Close</md-button>
                    <md-button class="md-primary" @click="editedSubmit">Save</md-button>
                </md-dialog-actions>
            </md-dialog>

            <md-dialog :md-active.sync="removeDialog" @keydown.esc="closeDialog" @keydown.enter="removeData">
                <md-dialog-title>Remove</md-dialog-title>

                <md-dialog-content>
                    정말 삭제 하시겠습니까?
                </md-dialog-content>

                <md-dialog-actions>
                    <md-button class="md-primary" @click="closeDialog">Cancel</md-button>
                    <md-button class="md-primary" @click="removeData">Confirm</md-button>
                </md-dialog-actions>
            </md-dialog>
        </div>

    </div>
</div>
</template>


<style>
    .addBtn {
        position: fixed;
        bottom: 0;
        right: 0;
        font-size: 30px;
        padding: 10px;
        color: #f5b914;
    }
    
    i {
        cursor: pointer;
    }
    
    .listTitle {
        margin-bottom: 10px;
        background-color: #f5b914;
        font-weight: bold;
        padding: 5px 0;
    }
    
    .listInner {
        margin-bottom: 10px;
        background-color: #dedede;
        padding: 5px 0;
    }
</style>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-material"></script>

<script>
import Vue from 'vue'
export default Vue.extend({
  
})
    Vue.use(VueMaterial.default);
    //api 통신 대체용 test data
    const testData = testData[{
        "id": 41,
        "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        "subject": "Finland",
        "desc": "Calera de Tango"
    }, {
        "id": 42,
        "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        "subject": "Lesotho",
        "desc": "Ancarano"
    }, {
        "id": 43,
        "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        "subject": "Western Sahara",
        "desc": "Cochamó"
    }, {
        "id": 44,
        "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        "subject": "Guernsey",
        "desc": "Villers-lez-Heest"
    }, {
        "id": 45,
        "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        "subject": "Turkey",
        "desc": "Liedekerke"
    }, {
        "id": 46,
        "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        "subject": "Dominica",
        "desc": "Nanterre"
    }]

    new Vue({
        el: '#app',
        data: {
            addDialog: false,
            editDialog: false,
            removeDialog: false,
            listData: [],
            search: '',
            searchedData: [],
            curSelecdtIndex: 0, //선택한 index
            first: false,
            second: false,

            newData: {
                id: Number,
                subject: '',
                desc: ''
            },
            selectedData: {
                id: Number,
                subject: '',
                desc: ''
            }

        },
        created() {
            this.listData = testData;
        },

        computed: {
            //여기서 오타등의 에러가 났을 경우, toLowerCase function이 없다는 에러메시지 나옴
            sortedData() {
                if (this.search) {
                    //listData filter 후, 검색한 데이터(결과값)를 listData에 할당
                    this.searchedData = this.listData.filter(
                        (data) => {
                            return data.subject.toLowerCase().includes(this.search.toLowerCase());
                        });

                    return this.listData = this.searchedData;
                } else {
                    //데이터가 없을 경우, 전체 리스트 출력
                    return this.listData = testData;
                }
            }
        },

        methods: {
            submit() {
                const submitData = {
                    id: this.newData.id,
                    subject: this.newData.subject,
                    desc: this.newData.desc
                }

                //console.log(submitData);
                this.listData.push(submitData);
                this.closeDialog();
                this.clearData();
            },

            editedSubmit(index) {
                const editedData = {
                    id: this.selectedData.id,
                    subject: this.selectedData.subject,
                    desc: this.selectedData.desc,
                }

                //this.listData.push(editedData); 가 아님
                //해당 위치에 데이터 추가: splice(해당 index, 갯수, 추가할 데이터)
                this.listData.splice(this.curSelecdtIndex, 1, editedData);
                this.closeDialog();
            },

            removeData() {
                //데이터 삭제: splice(해당 index, 갯수)
                this.listData.splice(this.curSelecdtIndex, 1);
                this.removeDialog = false;
            },

            onAdd() {
                this.addDialog = true;
            },

            onEdit(index) {
                this.editDialog = true;

                this.curSelecdtIndex = index;
                this.selectedData.id = this.listData[this.curSelecdtIndex].id;
                this.selectedData.subject = this.listData[this.curSelecdtIndex].subject;
                this.selectedData.desc = this.listData[this.curSelecdtIndex].desc;
            },

            onRemove(index) {
                this.removeDialog = true;
                //현재 index번호를 보내주어야, removeDialog창에서 confirm 클릭후
                //해당 list를 지울수 있음
                this.curSelecdtIndex = index;
            },

            closeDialog() {
                this.addDialog = false;
                this.editDialog = false;
                this.removeDialog = false;
            },

            clearData(key) {
                for (let key in this.newData) {
                    this.newData[key] = '';
                }
            },
        }
    })
</script>