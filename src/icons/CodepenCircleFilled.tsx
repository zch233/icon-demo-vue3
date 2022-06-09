// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CodepenCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CodepenCircleFilled';

export interface CodepenCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CodepenCircleFilled: CodepenCircleFilledIconType = (props, context) => <Icon name='CodepenCircleFilled' {...{ ...props, ...context.attrs }} icon={CodepenCircleFilledSvg} />;

CodepenCircleFilled.displayName = 'CodepenCircleFilled';

export default CodepenCircleFilled;