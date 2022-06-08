// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import QqCircleFilledSvg from '@ant-design/icons-svg/lib/asn/QqCircleFilled';

export interface QqCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const QqCircleFilled: QqCircleFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={QqCircleFilledSvg} />;

QqCircleFilled.displayName = 'QqCircleFilled';

export default QqCircleFilled;