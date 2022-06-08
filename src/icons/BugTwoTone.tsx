// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BugTwoToneSvg from '@ant-design/icons-svg/lib/asn/BugTwoTone';

export interface BugTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BugTwoTone: BugTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={BugTwoToneSvg} />;

BugTwoTone.displayName = 'BugTwoTone';

export default FunctionalComponent;