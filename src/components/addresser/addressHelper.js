import emptyArdObj from './emptyAddress'

let AddressItem = function AdrItem(level = null, name= '', refId= null, fullName = null){
    this.level = level;
    this.name = name;
    this.refId = refId;
    this.fullName = fullName;
};

AddressItem.prototype.setObj = function(obj){
    this.level = obj.level;
    this.name = obj.name;
    this.refId = obj.refId;
    this.fullName = obj.fullName ? obj.fullName : null;
};


const aolevelmap = {
    'aolevel': {objName: 'addressSearchObj', 'pos': -1, 'label': 'full', 'show': false},
    'aolevel0': {objName: 'countryRegion','pos': 1, 'label': 'Страна', 'show': true},
    'aolevel1': {objName: 'aolevel1','pos': 10, 'label': 'Субъект', 'show': true},
    'aolevel2': {objName: 'aolevel2','pos': 20, 'label': '', 'show': false},
    'aolevel3': {objName: 'aolevel3','pos': 30, 'label': 'Район', 'show': true},
    'aolevel4': {objName: 'aolevel4','pos': 40, 'label': 'Город', 'show': true},
    'aolevel5': {objName: 'aolevel5','pos': 50, 'label': 'Внутригородская территория', 'show': true},
    'aolevel6': {objName: 'aolevel6','pos': 60, 'label': 'Населенный пункт', 'show': true},
    'aolevel65': {objName: 'aolevel65','pos': 65, 'label': 'Элем. планир. структуры', 'show': true},
    'aolevel7': {objName: 'aolevel7','pos': 70, 'label': 'Улица', 'show': true},
    'aolevel90': {objName: 'aolevel90','pos': 90, 'label': 'не используется', 'show': false},
    'aolevel91': {objName: 'aolevel91','pos': 91, 'label': 'не используется', 'show': false},
    'aolevel100': {objName: 'house','pos': 100, 'label': 'Дом', 'show': true}
};

export default {
    getResource: (key)=>{
        switch (key) {
            case -1: return '/searchAddressAlt';
            // case 100: return '/getDataForAddresses';
            default: return '/getDataForAddresses';
        }
    },
    getEmpty: () => {
        return emptyArdObj;
    },
    getAoLevelMap: () => {
        return aolevelmap;
    },
    aolevelsFromDto: function (dto) {
        let arr = [];
        for (let vKey in dto) {
            if (!dto.hasOwnProperty(vKey)) {
                continue;
            }
            if (vKey.indexOf('aolevel') > -1 && aolevelmap[vKey].show) {
                arr.push({
                    'aolevel': vKey, 'level': dto[vKey].level, 'refId': dto[vKey].refId, 'name': dto[vKey].name
                    , title: aolevelmap[vKey].label
                });
            } else if (vKey === 'countryRegion') {
                arr.push(
                    {
                        'aolevel': 'aolevel0', 'level': 0, 'refId': dto[vKey].refId, 'name': dto[vKey].name
                        , title: aolevelmap['aolevel0'].label
                    });
            } else if (vKey === 'house') {
                arr.push(
                    {
                        'aolevel': 'aolevel100', 'level': 100, 'refId': dto[vKey].refId, 'name': dto[vKey].name
                        , title: aolevelmap['aolevel100'].label
                    });
            }
        }
        arr = arr.sort((a, b) => {
            return aolevelmap[a.aolevel].pos - aolevelmap[b.aolevel].pos;
        });
        return arr;
    },
    preparedArr() {
        let resultArr = [];
        let aoLevelMap = this.getAoLevelMap();
        for (let aoLevelMapKey in aoLevelMap) {
            if (aoLevelMap.hasOwnProperty(aoLevelMapKey)) {
                resultArr[aoLevelMapKey] = [];
            }
        }
        return resultArr;
    },
    AdrItem : AddressItem
};
