// Gumroad license unlock (same pattern as Buck Ledger).
const LICENSE_CFG={
  GUMROAD_PRODUCT_ID:"lfOFXMY0wn9nTK3XoacBvQ==",
  CHECKOUT_URL:"https://pocketappstudio.gumroad.com/l/jncnq",
  VERIFY_URL:"https://api.gumroad.com/v2/licenses/verify"
};
const License={
  has(){return !!localStorage.getItem('ts_license')},
  async verify(key,inc){
    if(!LICENSE_CFG.GUMROAD_PRODUCT_ID)return{state:'unset',msg:'Coming soon'};
    const b=new URLSearchParams();b.set('product_id',LICENSE_CFG.GUMROAD_PRODUCT_ID);b.set('license_key',key);b.set('increment_uses_count',inc?'true':'false');
    let j;try{const r=await fetch(LICENSE_CFG.VERIFY_URL,{method:'POST',body:b,cache:'no-store'});j=await r.json();j._http=r.status}catch(e){return{state:'network',msg:'No connection — try again'}}
    if(!j.success)return{state:j._http>=500?'network':'invalid',msg:j._http>=500?'Try again soon':'Key not recognized'};
    const p=j.purchase||{};
    if(p.refunded||p.chargebacked||(p.disputed&&!p.dispute_won))return{state:'revoked',msg:'Key no longer active'};
    if(p.product_id&&p.product_id!==LICENSE_CFG.GUMROAD_PRODUCT_ID)return{state:'invalid',msg:'Key is for another product'};
    return{state:'ok',ok:true};
  },
  async activate(key){const r=await this.verify(key,true);if(r.ok){localStorage.setItem('ts_license',key);localStorage.setItem('ts_license_checked',Date.now())}return r},
  // Re-check quietly about once a week when online; revoke only on a definite refund/revoke.
  async recheck(){const k=localStorage.getItem('ts_license');if(!k||!navigator.onLine)return;if(Date.now()-(+localStorage.getItem('ts_license_checked')||0)<6048e5)return;
    const r=await this.verify(k,false);if(r.ok)localStorage.setItem('ts_license_checked',Date.now());else if(r.state==='revoked')localStorage.removeItem('ts_license')}
};
License.recheck();
