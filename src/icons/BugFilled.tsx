// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BugFilledSvg from '@ant-design/icons-svg/lib/asn/BugFilled';

export interface BugFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BugFilled: BugFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={BugFilledSvg} />;

BugFilled.displayName = 'BugFilled';

export default FunctionalComponent;