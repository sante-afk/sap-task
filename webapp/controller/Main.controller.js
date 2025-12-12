sap.ui.define([
	'./BaseController', 
	'sap/m/MessageToast',
], function (BaseController) {
	"use strict";

	return BaseController.extend("com.myorg.myapp.controller.Main", {
		onInit: function() {
			this.oBusyDialog = new sap.m.BusyDialog({
				customIconWidth: '256px',
				customIconHeight: '153px',
				customIconRotationSpeed: 0,
				customIcon: sap.ui.require.toUrl("com/myorg/myapp/mixins/loading.gif")
			}).setBusyIndicatorDelay(0);
			this.oBundle = this.getOwnerComponent().getModel('i18n').getResourceBundle();
			this.mTasks = this.getOwnerComponent().getModel('mTasks');
			this.loadData();
		},
		loadData: function () {
			this.oBusyDialog.open();
			const oModel = this.mTasks;
			const sPath = sap.ui.require.toUrl("com/myorg/myapp/Data.json");
			oModel.loadData(sPath);
			
			this.mTasks.attachRequestCompleted(() => {
				console.log("mTasks", this.mTasks.getData());
				this.oBusyDialog.close();
			});

		},
		
	});
});
