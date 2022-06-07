// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import HeartOutlinedSvg from '@ant-design/icons-svg/lib/asn/HeartOutlined';

export interface HeartOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const HeartOutlined: HeartOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={HeartOutlinedSvg} />
    ;

HeartOutlined.displayName = 'HeartOutlined';

export default FunctionalComponent;