// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodeOutlined';

export interface CodeOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CodeOutlined: CodeOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CodeOutlinedSvg} />
    ;

CodeOutlined.displayName = 'CodeOutlined';

export default FunctionalComponent;