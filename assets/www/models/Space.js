mzst.models.Space=Ext.regModel('mzst.models.Space', {
    fields: [
    {name: 'uid', type: 'string'},
    {name: 'sex', type: 'string'},
    {name: 'email', type: 'string'},
    {name: 'emailcheck', type: 'string'},
    {name: 'phone', type: 'string'},
    {name: 'qq', type: 'string'},
    {name: 'msn', type: 'string'},
    {name: 'birthyear', type: 'string'},
    {name: 'birthmonth', type: 'string'},
    {name: 'birthday', type: 'string'},
    {name: 'blood', type: 'string'},
    {name: 'marry', type: 'string'},
    {name: 'birthprovince', type: 'string'},
    {name: 'birthcity', type: 'string'},
    {name: 'resideprovince', type: 'string'},
    {name: 'residecity', type: 'string'},
    {name: 'note', type: 'string'},
    {name: 'spacenote', type: 'string'},
    {name: 'authstr', type: 'string'},
    {name: 'theme', type: 'string'},
    {name: 'nocss', type: 'string'},
    {name: 'menunum', type: 'string'},
    {name: 'css', type: 'string'},
    {name: 'privacy', type: 'string'},
    {name: 'friend', type: 'string'},
    {name: 'feedfriend', type: 'string'},
    {name: 'sendmail', type: 'string'},
    {name: 'sfz', type: 'string'},
    {name: 'sfzcheck', type: 'string'},
    {name: 'yyzz', type: 'string'},
    {name: 'yyzzcheck', type: 'string'},
    {name: 'mzcard', type: 'string'},
    {name: 'mzcardcheck', type: 'string'},
    {name: 'groupid', type: 'string'},
    {name: 'credit', type: 'string'},
    {name: 'username', type: 'string'},
    {name: 'name', type: 'string'},
    {name: 'namestatus', type: 'string'},
    {name: 'nameview', type: 'string'},
    {name: 'domain', type: 'string'},
    {name: 'viewnum', type: 'string'},
    {name: 'notenum', type: 'string'},
    {name: 'friendnum', type: 'string'},
    {name: 'dateline', type: 'string'},
    {name: 'updatetime', type: 'string'},
    {name: 'lastsearch', type: 'string'},
    {name: 'lastpost', type: 'string'},
    {name: 'lastlogin', type: 'string'},
    {name: 'lastsend', type: 'string'},
    {name: 'attachsize', type: 'string'},
    {name: 'addsize', type: 'string'},
    {name: 'flag', type: 'string'},
    {name: 'newpm', type: 'string'},
    {name: 'avatar', type: 'string'},
    {name: 'ip', type: 'string'},
    {name: 'mood', type: 'string'},
    {name: 'myapp', type: 'string'},
    {name: 'lid', type: 'string'},
    {name: 'qid', type: 'string'},
    {name: 'bid', type: 'string'},
    {name: 'fid', type: 'string'},
    {name: 'rid', type: 'string'},
    {name: 'showroom', type: 'string'},
    {name: 'wlid', type: 'string'},
    {name: 'wqid', type: 'string'},
    {name: 'wbid', type: 'string'},
    {name: 'grade', type: 'string'},
    {name: 'wealth', type: 'string'},
    {name: 'popularity', type: 'string'},
    {name: 'health', type: 'string'},
    {name: 'hits', type: 'string'},
    {name: 'honor', type: 'string'},
    {name: 'status', type: 'string'},
    {name: 'activity', type: 'string'},
    {name: 'work_start_time', type: 'string'},
    {name: 'friends', type: 'string'},
    {name: 'addfriendnum', type: 'string'},
    {name: 'liveplaceinvitenum', type: 'string'},
    {name: 'workplaceinvitenum', type: 'string'},
    {name: 'pokenum', type: 'string'},
    {name: 'allnotenum', type: 'string'},
    {name: 'image_url', type: 'string'},
    {name: 'creditstar', type: 'string'}
    ]
   
});

Ext.data.ProxyMgr.registerType("mzstspacestorage",
        Ext.extend(Ext.data.Proxy, {
            params: {
                uid: mzst.models.configure.getAt("0").get("uid")
            },
            
            create: function(operation, callback, scope) {
            },
            read: function(operation, callback, scope) {
                
                var thisProxy = this;
                Ext.util.JSONP.request({
                    url: getDataFrom("getspace.php"),
                    callbackKey: 'callback',
                    scope: this,    // it is important
                  
                    params: this.params,
                    scriptTag: true,
                    callback: function(data) {
                        
                        var records = [];
                        
                        var record = new mzst.models.Space({
                            uid: data.uid,
                            sex: data.sex,
                            email: data.email,
                            emailcheck: data.emailcheck,
                            phone: data.phone,
                            qq: data.qq,
                            msn: data.msn,
                            birthyear: data.birthyear,
                            birthmonth: data.birthmonth,
                            birthday: data.birthday,
                            blood: data.blood,
                            marry: data.marry,
                            birthprovince: data.birthprovince,
                            birthcity: data.birthcity,
                            resideprovince: data.resideprovince,
                            residecity: data.residecity,
                            note: data.note,
                            spacenote: data.spacenote,
                            authstr: data.authstr,
                            theme: data.theme,
                            nocss: data.nocss,
                            menunum: data.menunum,
                            css: data.css,
                            privacy: data.privacy,
                            friend: data.friend,
                            feedfriend: data.feedfriend,
                            sendmail: data.sendmail,
                            sfz: data.sfz,
                            sfzcheck: data.sfzcheck,
                            yyzz: data.yyzz,
                            yyzzcheck: data.yyzzcheck,
                            mzcard: data.mzcard,
                            mzcardcheck: data.mzcardcheck,
                            groupid: data.groupid,
                            credit: data.credit,
                            username: data.username,
                            name: data.name,
                            namestatus: data.namestatus,
                            nameview: data.nameview,
                            domain: data.domain,
                            viewnum: data.viewnum,
                            notenum: data.notenum,
                            friendnum: data.friendnum,
                            dateline: data.dateline,
                            updatetime: data.updatetime,
                            lastsearch: data.lastsearch,
                            lastpost: data.lastpost,
                            lastlogin: data.lastlogin,
                            lastsend: data.lastsend,
                            attachsize: data.attachsize,
                            addsize: data.addsize,
                            flag: data.flag,
                            newpm: data.newpm,
                            avatar: data.avatar,
                            ip: data.ip,
                            mood: data.mood,
                            myapp: data.myapp,
                            lid: data.lid,
                            qid: data.qid,
                            bid: data.bid,
                            fid: data.fid,
                            rid: data.rid,
                            showroom: data.showroom,
                            wlid: data.wlid,
                            wqid: data.wqid,
                            wbid: data.wbid,
                            grade: data.grade,
                            wealth: data.wealth,
                            popularity: data.popularity,
                            health: data.health,
                            hits: data.hits,
                            honor: data.honor,
                            status: data.status,
                            activity: data.activity,
                            work_start_time: data.work_start_time,
                            friends: data.friends,
                            addfriendnum: data.addfriendnum,
                            liveplaceinvitenum: data.liveplaceinvitenum,
                            workplaceinvitenum: data.workplaceinvitenum,
                            pokenum: data.pokenum,
                            allnotenum: data.allnotenum,
                            image_url: data.image_url,
                            creditstar: data.creditstar
                        });
                        
                        records.push(record);
                       
                       //return model instances in a result set
                       operation.resultSet = new Ext.data.ResultSet({
                           records: records,
                           total  : records.length,
                           loaded : true
                       });
                       //announce success
                       operation.setSuccessful();
                       operation.setCompleted();
                       
                      
                       
                       //finish with callback
                       if (typeof callback == "function") {
                           callback.call(scope || thisProxy, operation);
                       }
                       
                    }
                });
            },
            update: function(operation, callback, scope) {
            },
            destroy: function(operation, callback, scope) {
            }
        })
    );

mzst.stores.space = new Ext.data.Store({
    model: "app.models.Space",
    proxy: {
        type: "mzstspacestorage",
        model: "app.models.Space"
    },
    getfield: function(fieldname){
        return this.getAt(0).get(fieldname);
    }
});

mzst.stores.neighborspace = new Ext.data.Store({
    model: "app.models.Space",
    proxy: {
        type: "mzstspacestorage",
        model: "app.models.Space"
    }
});



