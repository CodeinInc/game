const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.LocalStorage,
		C3.Plugins.Audio,
		C3.Plugins.gamecenter,
		C3.Plugins.Mouse,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Синусоида: 0},
	{click: 0},
	{clicks: 0},
	{Тач: 0},
	{itemshop: 0},
	{backgroundshop: 0},
	{ЛокальноеХранилище: 0},
	{Аудио: 0},
	{ИгровойЦентр: 0},
	{megaclick: 0},
	{Текст: 0},
	{passivka: 0},
	{passivkaalchemica: 0},
	{Мышь: 0},
	{BOUGHT: 0},
	{passiveunder: 0},
	{manabreak: 0},
	{manabreaktext: 0},
	{BOUGHT2: 0},
	{manabreak2: 0},
	{avatars: 0},
	{cerenasclubpfonminiprofilyadota: 0},
	{backgroundshop2: 0},
	{a1: 0},
	{a2: 0},
	{a3: 0},
	{AVATARStext: 0},
	{SHOPtext2: 0},
	{pointbooster: 0},
	{pointboostertext: 0},
	{BOUGHT3: 0},
	{pointbooster2: 0},
	{halloween: 0},
	{changelog: 0},
	{backgroundshop3: 0},
	{Текст2: 0},
	{Текст3: 0},
	{Спрайт: 0},
	{Спрайт2: 0},
	{Текст4: 0},
	{Спрайт3: 0},
	{Текст5: 0},
	{Текст6: 0},
	{money: 0}
];

self.InstanceType = {
	click: class extends self.ISpriteInstance {},
	clicks: class extends self.ITextInstance {},
	Тач: class extends self.IInstance {},
	itemshop: class extends self.ISpriteInstance {},
	backgroundshop: class extends self.ISpriteInstance {},
	ЛокальноеХранилище: class extends self.IInstance {},
	Аудио: class extends self.IInstance {},
	ИгровойЦентр: class extends self.IInstance {},
	megaclick: class extends self.ISpriteInstance {},
	Текст: class extends self.ITextInstance {},
	passivka: class extends self.ISpriteInstance {},
	passivkaalchemica: class extends self.ITextInstance {},
	Мышь: class extends self.IInstance {},
	BOUGHT: class extends self.ITextInstance {},
	passiveunder: class extends self.ISpriteInstance {},
	manabreak: class extends self.ISpriteInstance {},
	manabreaktext: class extends self.ITextInstance {},
	BOUGHT2: class extends self.ITextInstance {},
	manabreak2: class extends self.ISpriteInstance {},
	avatars: class extends self.ISpriteInstance {},
	cerenasclubpfonminiprofilyadota: class extends self.ISpriteInstance {},
	backgroundshop2: class extends self.ISpriteInstance {},
	a1: class extends self.ISpriteInstance {},
	a2: class extends self.ISpriteInstance {},
	a3: class extends self.ISpriteInstance {},
	AVATARStext: class extends self.ITextInstance {},
	SHOPtext2: class extends self.ITextInstance {},
	pointbooster: class extends self.ISpriteInstance {},
	pointboostertext: class extends self.ITextInstance {},
	BOUGHT3: class extends self.ITextInstance {},
	pointbooster2: class extends self.ISpriteInstance {},
	halloween: class extends self.ISpriteInstance {},
	changelog: class extends self.ISpriteInstance {},
	backgroundshop3: class extends self.ISpriteInstance {},
	Текст2: class extends self.ITextInstance {},
	Текст3: class extends self.ITextInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	Текст4: class extends self.ITextInstance {},
	Спрайт3: class extends self.ISpriteInstance {},
	Текст5: class extends self.ITextInstance {},
	Текст6: class extends self.ITextInstance {}
}