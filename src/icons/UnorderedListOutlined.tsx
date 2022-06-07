// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import UnorderedListOutlinedSvg from '@ant-design/icons-svg/lib/asn/UnorderedListOutlined';

export interface UnorderedListOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const UnorderedListOutlined: UnorderedListOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={UnorderedListOutlinedSvg} />
    ;

UnorderedListOutlined.displayName = 'UnorderedListOutlined';

export default FunctionalComponent;