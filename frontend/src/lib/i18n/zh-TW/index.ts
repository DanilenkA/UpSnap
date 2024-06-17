import zh from '../zh';
import type { Translation } from '../i18n-types';

const zh_TW = {
	home: {
		page_title: '首頁',
		order_groups: '群組',
		order_name: '名稱',
		order_ip: 'IP位址',
		order_tooltip: '排序',
		no_devices: '尚無設備',
		add_first_device: '添加你的第一台設備',
		grant_permissions: '請聯絡系統管理員授權現有設備或創建新設備的權限'
	},
	account: {
		page_title: '帳號資訊',
		account_type_admin: '管理員',
		account_type_user: '普通使用者',
		avatar_title: '頭像',
		language_title: '語言',
		language_option_auto: '自動',
		change_password_title: '更改密碼',
		change_password_body: '更改密碼後，將需重新登入',
		change_password_label: '舊密碼',
		change_password_new: '新密碼',
		change_password_confirm: '確認密碼'
	},
	device: {
		page_title: '新裝置',
		tabs: ['手動設定', '網路掃描'],
		card_btn_more: '更多',
		card_btn_more_edit: '編輯',
		card_btn_more_sleep: '睡眠',
		card_btn_more_reboot: '重新啟動',
		card_tooltip_wake_cron: '喚醒排程',
		card_tooltip_shutdown_cron: '關機排程',
		card_tooltip_wake_password: '喚醒密碼',
		card_tooltip_last_status_change: '最後狀態更新',
		card_password: '密碼',
		card_nic_tooltip_pending: '等待中...',
		card_nic_tooltip_shutdown: '關機',
		card_nic_tooltip_shutdown_no_cmd: '未設定關機指令',
		card_nic_tooltip_shutdown_no_permission: '無關閉此裝置之權限',
		card_nic_tooltip_power: '開機',
		card_nic_tooltip_power_no_permission: '無開啟此裝置之權限',
		modal_confirm_wake_title: '喚醒 {device}?',
		modal_confirm_wake_desc: '你確定要喚醒 {device} 嗎?',
		modal_confirm_shutdown_title: '關閉 {device}?',
		modal_confirm_shutdown_desc: '你確定要關閉 {device} 嗎?',
		general: '通用',
		general_name: '名稱',
		general_name_placeholder: '裝置名稱',
		general_ip: 'IP',
		general_mac: 'Mac',
		general_netmask: '子網域遮罩',
		general_required_field: '必填',
		ports: '埠',
		ports_desc: 'UpSnap 可以檢查指定的埠是否開啟',
		ports_add_new: '新增埠',
		ports_name: '名稱',
		ports_number: '通訊埠編號',
		link: '連結',
		link_desc: '讓您的裝置名稱成為可點擊的連結，非常適合用來連結儀表板等。',
		ping: 'Ping',
		ping_desc:
			'你可以使用自定義的指令來檢查裝置是否開機。該指令應返回退出碼 <span class="badge">0</span> 以表示裝置已開機，任何其他退出碼將標記裝置為關機。',
		ping_cmd: '自定義 ping 指令',
		wake: '喚醒',
		wake_desc: '你可以透過排程来唤醒裝置。',
		wake_cmd: '自定義唤醒指令',
		wake_cron: '唤醒排程',
		wake_cron_enable: '啟用定時喚醒',
		sol: 'Sleep-On-LAN',
		sol_desc1:
			'你可以使用 <a class="link" href="https://github.com/SR-G/sleep-on-lan" target="_blank">Sleep-On-LAN</a> 工具讓電腦睡眠。 Sleep-On-LAN (SOL) 是一个外部的工具，它在你想要進入睡眠的PC上執行並有RestAPI端口. 有關 Sleep-On-LAN 設定的說明, 請見文檔 <a href="https://github.com/SR-G/sleep-on-lan#usage" class="link" target="_blank">Usage</a>',
		sol_desc2: 'SOL 已配置為使用 HTTP 發送請求，而不是 UDP以啟用授權並提高請求的可靠性。',
		sol_desc3:
			'因此, 請確保在 <a href="https://github.com/SR-G/sleep-on-lan#configuration" class="link" target="_blank">SOL 配置</a> 的 <span class="badge">Listeners</span> 部分中包含<span class="badge">HTTP:&lt;YOURPORT&gt;</span>',
		sol_enable: '啟用 Sleep-On-LAN',
		sol_port: 'SOL 通訊埠',
		sol_authorization: '認證',
		sol_user: 'SOL 帳號',
		sol_password: 'SOL 密碼',
		shutdown: '關機',
		shutdown_desc:
			'這個<strong>shell指令</strong>將在您的容器內運行（如果您使用docker），或者在您的主機上運行（如果您使用二進制）。為了驗證其正常工作，您可以先在容器內或主機的shell中運行這個指令。常見的指令有<span class="badge">net rpc</span>用於Windows，<span class="badge">sshpass</span>用於Linux，或者一般用於進行網絡請求的<span class="badge">curl</span>。',
		shutdown_examples: '範例:',
		shutdown_examples_windows: '關閉遠端 Windows 主機:',
		shutdown_examples_linux: '關閉遠端 Linux 主機:',
		shutdown_cmd: '關機指令',
		shutdown_cron_desc: '就像設定排程來喚醒裝置一樣，您也可以設定一個排程來關閉這個裝置。',
		shutdown_cron: '關機排程',
		shutdown_cron_enable: '啟用關機排程',
		password: '密碼',
		password_desc:
			'一些網路介面卡能給 magic packets 設密碼, 也可稱作 <span class="badge">SecureON</span>. 密碼長度只能為0、4或6個字。',
		groups: '群組',
		groups_desc: '你可以將裝置加到群組, 以便在控制面板上依群組排序。',
		groups_placeholder: "例如: 'Basement' 或 'Office'",
		network_scan_range_saved: '掃瞄範圍已儲存',
		network_scan_desc:
			'自動掃描網路上的設備，要使用這個功能，你需要以root/系統管理員權限執行 UpSnap, 並在你的 $PATH 中安裝nmap(使用docker安裝者不需執行任何操作)，掃描可能需一段時間。',
		network_scan_ip_range: 'IP 範圍',
		network_scan_no_range: '無掃瞄範圍',
		network_scan_unsaved_changes: '未儲存的更改',
		network_scan_running: '掃描中',
		network_scan: '掃描',
		network_scan_ip: 'IP:',
		network_scan_mac: 'Mac:',
		network_scan_mac_vendor: 'Mac 供應商:',
		network_scan_netmask: '子網域遮罩:',
		network_scan_add_all: '新增全部裝置',
		network_scan_replace_netmask: '替換所有設備的子網域遮罩？',
		network_scan_new_netmask: '新子網域遮罩',
		network_scan_include_unknown: '包括名稱為 “Unknown” 的裝置',
		require_confirmation: '再次確認'
	},
	login: {
		welcome: '歡迎使用',
		email_label: '電子郵件/使用者名稱:',
		password_label: '密碼:',
		btn_more: '更多',
		menu_title_auth_providers: '其他身份驗證提供者',
		btn_login: '登入'
	},
	settings: {
		page_title: '設定',
		ping_interval_title: 'Ping 間隔',
		ping_interval_desc1: '設定 ping 的間隔。留空使用預設值 <span class="badge">@every 3s</span>.',
		ping_interval_desc2:
			'有關 cron 的更多資訊，請見<a class="link" href="https://zh.wikipedia.org/wiki/Cron" target="_blank">Wikipedia</a> 或參閱 <a class="link" href="https://pkg.go.dev/github.com/robfig/cron/v3" target="_blank">cron 文檔</a>.',
		lazy_ping_title: 'Lazy ping',
		lazy_ping_desc: '當開關打開時, UpSnap 只會在有訪問者訪問網站時才對設備進行 ping 測試',
		lazy_ping_enable: '啟用',
		website_title_title: '網站標題',
		website_title_desc: '設置網站的標題，同時顯示在瀏覽器的標籤中。',
		icon_title: '圖標',
		icon_desc: '設定一個自訂義圖標。支援的檔案類型:',
		upsnap_version: 'UpSnap 版本'
	},
	users: {
		page_title: '使用者',
		allow_create_devices: '允許 {username} 創建新裝置和修改群組',
		device_permissions: '裝置權限',
		create_new_device: '創建新裝置',
		read: '查看',
		update: '更新',
		delete: '刪除',
		power: '電源',
		toggle: '全選',
		confirm_delete_title: '確認刪除',
		confirm_delete_desc: '你確定要刪除 {username} 嗎?',
		create_new_user: '新增使用者',
		username: '使用者名稱',
		password: '密碼',
		password_confirm: '確認密碼',
		required_field: '必填'
	},
	buttons: {
		save: '保存',
		delete: '刪除',
		change: '更改',
		reset: '重設',
		cancel: '取消',
		add: '新增',
		confirm: '確認'
	},
	welcome: {
		step1_page_title: '歡迎使用 UpSnap 🥳',
		step1_setup_desc: '初次使用，請依下列指示完成步驟',
		step1_setup_btn_next: '下一步',
		step2_page_title: '創建管理者帳號',
		step2_label_email: '電子郵件:',
		step2_label_password: '密碼:',
		step2_label_min_chars: '請輸入至少10个字元',
		step2_label_password_confirm: '確認密碼:',
		step2_btn_create: '創建',
		step3_page_title: '一切就緒! 🎉',
		step3_page_desc: '繼續向您的儀表板新增裝置。',
		step3_btn_done: '開始使用!',
		not_expected_title: '意料之外! 🧐',
		not_expected_desc: '你已經完成設定，無需再次設定',
		not_expected_back: '返回',
		progress_step1: '歡迎',
		progress_step2: '創建帳號',
		progress_step3: '完成'
	},
	toasts: {
		admin_saved: '帳號資訊已儲存',
		user_saved: '帳號資訊已儲存',
		user_created: '使用者 {username} 已創建',
		user_deleted: '使用者 {username} 已刪除',
		settings_saved: '設定已儲存',
		password_changed: '密碼已修改，請重新登入。',
		passwords_missmatch: '兩次輸入的密碼不相同',
		permissions_created: '使用者 {username} 的權限已創建',
		permissions_deleted: '使用者 {username} 的權限已刪除',
		permissions_updated: '使用者 {username} 的權限已更新',
		permissions_updated_personal: '你的權限已更新',
		no_permission: '你無權訪問 {url}',
		device_created: '已創建 {device}',
		devices_created_multiple: '已創建 {count|int} 個設備',
		device_updated: '已更新 {device}',
		device_deleted: '已刪除 {device}',
		group_created: '已創建群組 {group}',
		group_deleted: '已創建群組 {group}'
	},
	navbar: {
		theme: '主題',
		new: '新增',
		edit_account: '編輯帳號',
		logout: '退出'
	}
} satisfies Translation;

export default zh_TW;
