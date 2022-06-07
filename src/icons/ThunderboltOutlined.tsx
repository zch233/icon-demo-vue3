// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ThunderboltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ThunderboltOutlined';

export interface ThunderboltOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ThunderboltOutlined: ThunderboltOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ThunderboltOutlinedSvg} />
    ;

ThunderboltOutlined.displayName = 'ThunderboltOutlined';

export default FunctionalComponent;