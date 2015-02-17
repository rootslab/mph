/*
 * Mph.
 *
 * Copyright(c) 2015 Guglielmo Ferri <44gatti@gmail.com>
 * MIT Licensed
 */

exports.version = require( '../package' ).version;
exports.Mph = ( function () {
    var log = console.log
        , Bolgia = require( 'bolgia' )
        , clone = Bolgia.clone
        , improve = Bolgia.improve
        // mph default opt
        , monadr_opt = {
        }
        , Mph = function ( opt ) {
            var me = this
                , is = me instanceof Mph
                , cfg = null
                ;
            if ( ! is ) return new Mph( opt );
            me.options = cfg = improve( clone( opt ), monadr_opt );
        }
        , mproto = Mph.prototype
        ;

    mproto.do = function () {
        var me = this
            ;
        return me;
    };

    return Mph;

} )();