// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import LinkOutlinedSvg from '@ant-design/icons-svg/lib/asn/LinkOutlined';

export interface LinkOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const LinkOutlined: LinkOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={LinkOutlinedSvg} />
    ;

LinkOutlined.displayName = 'LinkOutlined';

export default FunctionalComponent;