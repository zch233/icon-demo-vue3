// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PullRequestOutlinedSvg from '@ant-design/icons-svg/lib/asn/PullRequestOutlined';

export interface PullRequestOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PullRequestOutlined: PullRequestOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={PullRequestOutlinedSvg} />;

PullRequestOutlined.displayName = 'PullRequestOutlined';

export default FunctionalComponent;