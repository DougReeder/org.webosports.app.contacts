/**
    Define and instantiate your enyo.Application kind in this file.  Note,
    application rendering should be deferred until DOM is ready by wrapping
    it in a call to enyo.ready().
*/
/* exported app */

enyo.kind({
    name: "contacts.Application",
    kind: "enyo.Application",
    view: "contacts.MainView"
});

enyo.ready(function () {
    if (window.PalmSystem) {
        window.PalmSystem.stageReady();
        //load contacts from db8:
        enyo.store.addSources({db8: "db8Source"});
    } else {
        //use mocking source:
        enyo.store.addSources({db8: "db8SourceMock"});
    }
    new contacts.Application({name: "app"});
});
