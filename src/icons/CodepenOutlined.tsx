// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CodepenOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodepenOutlined';

export interface CodepenOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CodepenOutlined: CodepenOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CodepenOutlinedSvg} />
    ;

CodepenOutlined.displayName = 'CodepenOutlined';

export default FunctionalComponent;