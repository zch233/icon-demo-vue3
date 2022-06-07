// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DislikeOutlinedSvg from '@ant-design/icons-svg/lib/asn/DislikeOutlined';

export interface DislikeOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DislikeOutlined: DislikeOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DislikeOutlinedSvg} />
    ;

DislikeOutlined.displayName = 'DislikeOutlined';

export default FunctionalComponent;