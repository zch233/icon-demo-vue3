// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import GitlabFilledSvg from '@ant-design/icons-svg/lib/asn/GitlabFilled';

export interface GitlabFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const GitlabFilled: GitlabFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={GitlabFilledSvg} />;

GitlabFilled.displayName = 'GitlabFilled';

export default FunctionalComponent;