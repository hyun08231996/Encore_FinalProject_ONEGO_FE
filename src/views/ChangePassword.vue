<template>
	<div>
		<v-flex id="changepass-margin" class="mx-auto">
			<div align="center" class="spacing">
				<label id="title">비밀번호 변경</label>
			</div>
			<!-- 현재 비밀번호 -->
			<div class="spacing-pass">
				<div style="margin-bottom:20px;">
					<label class="subtitle">현재 비밀번호</label>
				</div>
				<div>
					<v-text-field id="current-pass" class="current-pass"
						v-model="curPass"
						:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
						:rules="[rules.required]"
						:type="show1 ? 'text' : 'password'"
						color="#00d5aa"
						name="input-10-1"
						dense
						single-line
						outlined
						@click:append="show1 = !show1"/>
				</div>
			</div>
			<v-divider class="divider-pass"/>
			<!-- 새 비밀번호 -->
			<div class="spacing-pass">
				<div style="margin-bottom:20px;">
					<label class="subtitle">새 비밀번호</label>
				</div>
				<div>
					<v-text-field id="new-pass" class="new-pass"
						v-model="newPass"
						:value="newPass"
						:append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
						:rules="[rules.required]"
						:type="show2 ? 'text' : 'password'"
						color="#00d5aa"
						name="input-10-1"
						dense
						single-line
						outlined
						@click:append="show2 = !show2"
						/>
				</div>
			</div>
			<v-divider class="divider-pass"/>
			<!-- 새 비밀번호 확인 -->
			<div class="spacing-pass">
				<div style="margin-bottom:20px;">
					<label class="subtitle">새 비밀번호 확인</label>
				</div>
				<div>
					<v-text-field id="new-pass-check" class="new-pass-check"
						v-model="newPassChk"
						:append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
						:rules="[rules.required, rules.match]"
						:type="show3 ? 'text' : 'password'"
						color="#00d5aa"
						name="input-10-1"
						dense
						single-line
						outlined
						@click:append="show3 = !show3"/>
				</div>
			</div>
			<v-divider class="divider-pass"/>
			<!-- cancel and change buttons -->
			<div align="center">
				<v-btn id="cancel-btn"
					rounded
					outlined
					color="grey"
					href="/setting">
					취소
				</v-btn>&nbsp;&nbsp;
				<v-btn id="save-btn"
					rounded
					outlined
					color="rgb(0, 213, 170)"
					@click="changePass">
					변경
				</v-btn>
			</div>
		</v-flex>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		name: "ChangePassword",
		methods:{
			changePass(){
				location.href='#';
			},

		},
		data: () => ({
			show1: false,
			show2: false,
			show3: false,
			curPass: '',
			newPass: '',
			newPassChk: '',
			rules: {
				required: (value: string) => !!value || '필수 입력사항입니다.',
				match: (v:string) => v === (document.getElementById('new-pass') as HTMLTextAreaElement).value || '비밀번호가 일치하지 않습니다.'
			},
		})


	})
</script>

<style>
#changepass-margin{
	max-width:55%;
	margin-top: -15px;
}
.spacing-pass{
	margin-bottom:30px;
	margin-left:20%;
	margin-right:20%;
}
.subtitle{
	color:grey;
	font-size:0.75em;
}
.divider-pass{
	margin-top:-15px;
	margin-bottom:30px;
}
#current-pass,
#new-pass,
#new-pass-check{
	font-size:1.2em !important;
}
.current-pass .v-input__slot,
.new-pass .v-input__slot,
.new-pass-check .v-input__slot{
	margin-bottom:3px !important;
}
.current-pass .v-messages__message,
.new-pass .v-messages__message,
.new-pass-check .v-messages__message{
	font-size:0.95em;
}
#cancel-btn:hover{
	color:#757575 !important;
}
#save-btn:hover{
	color:#02bf99 !important;
}
</style>