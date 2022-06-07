// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import TwitterOutlinedSvg from '@ant-design/icons-svg/lib/asn/TwitterOutlined';

export interface TwitterOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const TwitterOutlined: TwitterOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={TwitterOutlinedSvg} />
    ;

TwitterOutlined.displayName = 'TwitterOutlined';

export default FunctionalComponent;