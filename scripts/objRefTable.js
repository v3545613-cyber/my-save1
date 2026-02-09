const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Browser,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Date,
		C3.Plugins.Button,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.Browser.Acts.GoToURL
	];
};
self.C3_JsPropNameTable = [
	{Браузер: 0},
	{Твёрдый: 0},
	{ТайловыйФон: 0},
	{Дата: 0},
	{Кнопка: 0}
];

self.InstanceType = {
	Браузер: class extends self.IInstance {},
	ТайловыйФон: class extends self.ITiledBackgroundInstance {},
	Дата: class extends self.IInstance {},
	Кнопка: class extends self.IButtonInstance {}
}