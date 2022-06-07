// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CodepenCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodepenCircleOutlined';

export interface CodepenCircleOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CodepenCircleOutlined: CodepenCircleOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CodepenCircleOutlinedSvg} />
    ;

CodepenCircleOutlined.displayName = 'CodepenCircleOutlined';

export default FunctionalComponent;