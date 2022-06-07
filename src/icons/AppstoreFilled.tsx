// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AppstoreFilledSvg from '@ant-design/icons-svg/lib/asn/AppstoreFilled';

export interface AppstoreFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AppstoreFilled: AppstoreFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AppstoreFilledSvg} />
    ;

AppstoreFilled.displayName = 'AppstoreFilled';

export default FunctionalComponent;