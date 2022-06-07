// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import IdcardOutlinedSvg from '@ant-design/icons-svg/lib/asn/IdcardOutlined';

export interface IdcardOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const IdcardOutlined: IdcardOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={IdcardOutlinedSvg} />
    ;

IdcardOutlined.displayName = 'IdcardOutlined';

export default FunctionalComponent;