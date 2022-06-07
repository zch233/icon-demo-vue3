// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AppstoreAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppstoreAddOutlined';

export interface AppstoreAddOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AppstoreAddOutlined: AppstoreAddOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AppstoreAddOutlinedSvg} />
    ;

AppstoreAddOutlined.displayName = 'AppstoreAddOutlined';

export default FunctionalComponent;