// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import IeCircleFilledSvg from '@ant-design/icons-svg/lib/asn/IeCircleFilled';

export interface IeCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IeCircleFilled: IeCircleFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={IeCircleFilledSvg} />;

IeCircleFilled.displayName = 'IeCircleFilled';

export default IeCircleFilled;